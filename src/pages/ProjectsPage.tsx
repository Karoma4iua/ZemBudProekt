import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import CommentForm from '../components/projects/CommentForm';
import CommentList from '../components/projects/CommentList';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  year: string;
  client: string;
  likes?: number;
  dislikes?: number;
  userReaction?: 'like' | 'dislike' | null;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Житловий комплекс "Едельвейс"',
    description: 'Сучасний житловий комплекс з підземним паркінгом та власною інфраструктурою.',
    category: 'Житлове',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    year: '2023',
    client: 'ТОВ "Інвестбуд"',
  },
  {
    id: 2,
    title: 'Бізнес-центр "Магнат"',
    description: 'Бізнес-центр класу А+ з сучасними офісними приміщеннями та конференц-залами.',
    category: 'Комерційне',
    image: 'https://images.pexels.com/photos/273683/pexels-photo-273683.jpeg',
    year: '2022',
    client: 'ПП "БізнесГруп"',
  },
  {
    id: 3,
    title: 'Котеджне містечко "Затишок"',
    description: 'Комплекс приватних будинків з благоустроєною територією та інфраструктурою.',
    category: 'Житлове',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    year: '2021',
    client: 'ЖБК "Затишок"',
  },
  {
    id: 4,
    title: 'Торговий центр "Палац"',
    description: 'Багатофункціональний торговий центр з кінотеатром та розважальною зоною.',
    category: 'Комерційне',
    image: 'https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg',
    year: '2020',
    client: 'ТОВ "Торгінвест"',
  },
  {
    id: 5,
    title: 'Адміністративна будівля "Прогрес"',
    description: 'Сучасна адміністративна будівля з енергоефективними рішеннями.',
    category: 'Адміністративне',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg',
    year: '2019',
    client: 'Міська рада',
  },
  {
    id: 6,
    title: 'Медичний центр "Здоров\'я"',
    description: 'Спеціалізований медичний центр з лабораторією та стаціонаром.',
    category: 'Медичне',
    image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
    year: '2021',
    client: 'ПП "Медінвест"',
  },
  {
    id: 7,
    title: 'Спортивний комплекс "Олімп"',
    description: 'Багатофункціональний спортивний комплекс з басейном та тренажерними залами.',
    category: 'Спортивне',
    image: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg',
    year: '2022',
    client: 'ГО "Спорт для всіх"',
  },
  {
    id: 8,
    title: 'Готель "Панорама"',
    description: 'П\'ятизірковий готель з панорамним видом на місто та розважальною інфраструктурою.',
    category: 'Комерційне',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg',
    year: '2023',
    client: 'ТОВ "Туристик"',
  },
];

const categories = ['Всі', 'Житлове', 'Комерційне', 'Адміністративне', 'Медичне', 'Спортивне'];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);

  useEffect(() => {
    document.title = 'Наші Об\'єкти - ЗемБудПроект';
    fetchProjectReactions();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Всі') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const fetchProjectReactions = async () => {
    try {
      const { data: reactions, error } = await supabase
        .from('project_reactions')
        .select('*');

      if (error) throw error;

      const projectsWithReactions = projectsData.map(project => {
        const projectReactions = reactions?.filter(r => r.project_id === project.id) || [];
        return {
          ...project,
          likes: projectReactions.filter(r => r.reaction_type === 'like').length,
          dislikes: projectReactions.filter(r => r.reaction_type === 'dislike').length,
        };
      });

      setFilteredProjects(projectsWithReactions);
    } catch (error) {
      console.error('Error fetching reactions:', error);
    }
  };

  const handleReaction = async (projectId: number, type: 'like' | 'dislike') => {
    try {
      const project = filteredProjects.find(p => p.id === projectId);
      if (!project) return;

      if (project.userReaction === type) {
        // Remove reaction
        await supabase
          .from('project_reactions')
          .delete()
          .eq('project_id', projectId)
          .eq('reaction_type', type);

        setFilteredProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  userReaction: null,
                  [type + 's']: (p[type + 's'] || 0) - 1,
                }
              : p
          )
        );
      } else {
        // Add new reaction
        if (project.userReaction) {
          // Remove previous reaction
          await supabase
            .from('project_reactions')
            .delete()
            .eq('project_id', projectId)
            .eq('reaction_type', project.userReaction);
        }

        await supabase
          .from('project_reactions')
          .insert([{ project_id: projectId, reaction_type: type }]);

        setFilteredProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  userReaction: type,
                  [type + 's']: (p[type + 's'] || 0) + 1,
                  [project.userReaction ? project.userReaction + 's' : '']: project.userReaction
                    ? (p[project.userReaction + 's'] || 0) - 1
                    : undefined,
                }
              : p
          )
        );
      }
    } catch (error) {
      console.error('Error handling reaction:', error);
    }
  };

  const fetchComments = async (projectId: number) => {
    setIsLoadingComments(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoadingComments(false);
    }
  };

  const handleCommentSubmit = async (data: { userName: string; content: string }) => {
    try {
      const { error } = await supabase.from('comments').insert([
        {
          project_id: selectedProject?.id,
          user_name: data.userName,
          content: data.content,
        },
      ]);

      if (error) throw error;
      
      if (selectedProject) {
        await fetchComments(selectedProject.id);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      throw error;
    }
  };

  const openProjectModal = async (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    await fetchComments(project.id);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="mb-4 text-center">Наші Об'єкти</h1>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Перегляньте галерею наших проектів, які демонструють нашу професійність,
            якість та увагу до деталей
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-card">
                  <div 
                    className="relative aspect-square overflow-hidden cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-blue-600 rounded">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="mt-2 text-sm text-gray-300">
                        {project.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4 bg-white">
                    <button
                      onClick={() => handleReaction(project.id, 'like')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                        project.userReaction === 'like'
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>{project.likes || 0}</span>
                    </button>
                    <button
                      onClick={() => handleReaction(project.id, 'dislike')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                        project.userReaction === 'dislike'
                          ? 'bg-red-100 text-red-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <ThumbsDown className="w-5 h-5" />
                      <span>{project.dislikes || 0}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium">
                Проекти цієї категорії поки відсутні
              </h3>
              <p className="mt-2 text-gray-600">
                Будь ласка, виберіть іншу категорію або перегляньте всі проекти
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg"
          >
            <button
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 bg-white rounded-full"
              onClick={closeProjectModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-80 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-blue-600 rounded">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <span className="block text-xs text-gray-500">Рік</span>
                  <span className="font-medium">{selectedProject.year}</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <span className="block text-xs text-gray-500">Клієнт</span>
                  <span className="font-medium">{selectedProject.client}</span>
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-md">
                  <span className="block text-xs text-gray-500">Категорія</span>
                  <span className="font-medium">{selectedProject.category}</span>
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold">Про проект</h3>
              <p className="mb-6 text-gray-600">{selectedProject.description}</p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} додаткове фото 1`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} додаткове фото 2`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <h3 className="mb-6 text-2xl font-semibold">Коментарі</h3>
              
              {isLoadingComments ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <CommentList comments={comments} />
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="mb-4 text-lg font-medium">Додати коментар</h4>
                    <CommentForm
                      projectId={selectedProject.id}
                      onCommentSubmit={handleCommentSubmit}
                    />
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <section className="py-20 bg-navy-800 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Маєте проект на думці?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-300">
            Наша команда готова допомогти вам втілити ваші ідеї в реальність.
            Зв'яжіться з нами для обговорення вашого проекту.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 font-medium text-navy-800 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Зв'язатися з нами
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;